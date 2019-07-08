package chuck_norris;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.charset.Charset;

public class ChuckNorrisEncoding {
	public static void main(String[] args) {
		try(BufferedReader in = new BufferedReader(new InputStreamReader(System.in))){
			
			String input = input(in);
			System.out.println("Binary form: " + stringToBinary(input));
			System.out.println("Chuck Norris encoded form:  ");
			System.out.println("  " + chuckNorrisEncodeFunction(input));
			
		}catch(IOException e) {
			System.out.println(":( \n\n");
			e.printStackTrace();
		}
	}
	
	
	private static boolean isASCII(String s) {
		return Charset.forName("US-ASCII").newEncoder().canEncode(s);
	}
	
	
	private static String input(BufferedReader in)throws IOException{
	    System.out.println("Eneter desired word: \n  >>");
	    String input = in.readLine();
	    while(!isASCII(input)) {
	    	System.err.println("Please use ASCII characters!\n  >>");
	        input = in.readLine();
	    }
	    return input;
	}
	
	private static String toBinary(char c) {
		return Integer.toBinaryString(c);
	}
	
	private static String stringToBinary(String s) {
		StringBuilder sb = new StringBuilder();
		for(int i=0; i < s.length(); i++) {
			sb.append(toBinary(s.charAt(i)));
		}
		return sb.toString();
	}
	
	private static String chuckNorrisEncodeFunction(String strToEncode) {
		if(strToEncode == null)
			throw new IllegalArgumentException("String cannot be null!");
		if(strToEncode.equals(""))
			throw new IllegalArgumentException("String cannot be empty!");
		
		String binaryForm = stringToBinary(strToEncode);
		StringBuilder sb = new StringBuilder();
		
		//Duzina binearne reprezentacije karaktera/stringa ne moze biti duzine 1, tako da nema tog specijalnog slucaja
		
		char curr;
		char succ = '0';
		int count = 0;
		
				
		for(int i=0, j=1; i < binaryForm.length(); i++, j++) {
			curr = binaryForm.charAt(i);
			
			if(j < binaryForm.length()) 
				succ = binaryForm.charAt(j);
									
			if(count == 0) {
				if(curr ==  '0') { 
					sb.append("00 "); //imamo 0
					count++;
				}
				else {
					sb.append("0 "); //imamo 1
					count++;
				}
			}
			
			
			if(curr == succ && (i != (binaryForm.length() - 1))) //Ako su isti i nismo stigli do kraja
				count++;
			
			
			if(curr != succ || i == (binaryForm.length() - 1)) { //ako current != successor ili ako smo stigli do kraja
				for(int k=0; k < count; k++) { 
					sb.append("0"); //dodajemo broj ponavljanja 0 ili 1
				}
				sb.append(" ");
				count = 0;
			}
		}
		return sb.toString();
	}
}
