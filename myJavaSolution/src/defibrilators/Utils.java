package defibrilators;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import defibrilators.Defibrilator;
import defibrilators.User;

public class Utils {
	
    public static String input(BufferedReader in, String message, String defaultValue)throws IOException{
        System.out.println(message);
        if(!defaultValue.equals("") || defaultValue != null){
            System.out.println("ENTER for ["+ defaultValue + "]");
            String line = in.readLine();
            if(!line.equals(""))
                return line;
            else
                return defaultValue;
        }
        return in.readLine();
    }
	
    public static String loadFromFileAlt(String filePath)throws IOException{
	Stream<String> fileStream = Files.lines(Paths.get(filePath));
	String res = fileStream.collect(Collectors.joining());
	fileStream.close();
	
	return res;
    }
		
    public static String loadFromFile(String filePath)throws IOException{
          BufferedReader in = new BufferedReader(new FileReader(filePath));
          StringBuilder sb = new StringBuilder();

          String line = in.readLine();
          while(line != null){
              sb.append(line);
              line = in.readLine();
          }
          
          in.close();
          return sb.toString();
     }
	
    private static String loadFromURL(URL url) throws IOException {
	try (BufferedReader in = new BufferedReader(new InputStreamReader(url.openStream()))) {
		StringBuilder sb = new StringBuilder();
		String line = in.readLine();
		while (line != null) {
			sb.append(line);
			line = in.readLine();
		}
		return sb.toString();
	}
    }
	
    public static List<Defibrilator> parse(String data){
    	 String regexArrBegin = "\\s*(?<arrayName>\\w+)\\s*:\\s*\\["; 
         String regexArrEnd = "\\s*\\]";
         String regexData = "\\s*?(?<propertyName> \\w+?)\\s*?:\\s*?(?<propertyValue>(\"|)(\\s*?\\w+\\w*?(\\.|\\s*?|\\,)\\w+\\w*?\\s*?)+(\"|)|(\\s*\"\\s*\"\\s*)|(\\d+?))\\s*?(?:,|)\\s*?"; 
         
         String regex = regexArrBegin + ".*?" + regexArrEnd; // Izdvojimo niz
         
         Pattern pattern = Pattern.compile(regex);
         Matcher matcher = pattern.matcher(data);
         
         List<Defibrilator> defebs  = new ArrayList<>();
         
         while(matcher.find()){
             String arrayName = matcher.group("arrayName").trim();
             String arrayData = matcher.group();
             
             if(arrayName.equalsIgnoreCase("defibrillators")) {
            	 pattern = Pattern.compile(regexData);
            	 matcher = pattern.matcher(arrayData);
            	 
            	 Defibrilator tmp = new Defibrilator();
            	 
            	 while(matcher.find()) {
            		 String propertyName = matcher.group("propertyName").trim();
            		 String propertyValue = matcher.group("propertyValue");
            		 
            		 switch(propertyName) {
            		 	case "id":
            		 		tmp.setId(Integer.parseInt(propertyValue.trim()));
            		 		break;
            		 	case "name":
            		 		tmp.setName(propertyValue);
            		 		break;
            		 	case "address":
            		 		tmp.setAddress(propertyValue);
            		 		break;
            		 	case "phone":
            		 		tmp.setPhone(propertyValue);
            		 		break;
            		 	case "lon":
            		 		tmp.setLon(Double.parseDouble(propertyValue.trim()));
            		 		break;
            		 	case "lat":
            		 		tmp.setLat(Double.parseDouble(propertyValue.trim()));
            		 		break;
            		 	default:
            		 		System.err.println("Unknown data (" + propertyName + ": " + propertyValue + ")");
            		 }
            		  
            		 if(tmp.dataIsComplete()) {
            			 defebs.add(tmp); //Dodamo defibrilator
            			 tmp = new Defibrilator(); //Resetujemo tmp  
            		 }
            			 
            	 }//End while 2
            	 
            	 return defebs;
            	 
             }//End if 1
         }//End while 1
    	return null;
    }
    
    public static User extractUserData(String data) {
    	 String regex = "\\s*?(?<propertyName> \\w+?)\\s*?:\\s*?(?<propertyValue>(\"|)(\\s*?\\w+\\w*?(\\.|\\s*?|\\,)\\w+\\w*?\\s*?)+(\"|)|(\\s*\"\\s*\"\\s*))\\s*?(?:,|)\\s*?";
         
         Pattern pattern = Pattern.compile(regex);
         Matcher matcher = pattern.matcher(data);
         
         User us = new User();
         
         int countOfMatches = 0;
         
         while(matcher.find()){
             String propertyName = (matcher.group("propertyName")).trim();
             String propertyValue = (matcher.group("propertyValue")).trim();
             
             countOfMatches++;
             
             if(propertyName.equalsIgnoreCase("lon"))
            	 us.setLon(Double.parseDouble(propertyValue));
             
            	 
             if(propertyName.equalsIgnoreCase("lat"))
            	 us.setLat(Double.parseDouble(propertyValue));
             
             if(us.dataIsComplete() && countOfMatches <= 2) 
            	 return us;
             
             if(countOfMatches > 2)
            	 break;
         }
    	
    	return null;
    }
    
    /*
      ## RULES
     * The distance `d` between two points `A` and `B` will be calculated using the following formula:
 		```
 		 x = (longitudeB - longitudeA) * cos((latitudeA + latitudeB) / 2)
 	 	 y = (latitudeB - latitudeA)
 		 d = sqr(x^2 + y^2) * 6371
 	 	```
     * In this formula, the latitudes and longitudes are expressed in radians.
     * The number `6371` corresponds to the radius of the Earth in km
     */
    
    public static Defibrilator getNearestDefibrilator(User user, List<Defibrilator> defibrilatos) {
    	Defibrilator res = defibrilatos.stream()
    						.sorted((a, b) ->{
    							//Distance to defb. a
    							double xa = (user.getLon() - a.getLon()) * Math.cos((a.getLat() + user.getLat())/2);
    							double ya = (user.getLat() - a.getLat());
    							double distanceToDefA = Math.sqrt(Math.pow(xa, 2) + Math.pow(ya, 2)) * 6371;
    					
    							//Distance to defb. b
    							double xb = (user.getLon() - b.getLon()) * Math.cos((b.getLat() + user.getLat())/2);
    							double yb = (user.getLat() - b.getLat());
    							double distanceToDefB =  Math.sqrt(Math.pow(xb, 2) + Math.pow(yb, 2)) * 6371;
    					
    							return Double.compare(distanceToDefA, distanceToDefB);
    							
    						}).findFirst().get();
    	
    	return res;
    }
    
}
