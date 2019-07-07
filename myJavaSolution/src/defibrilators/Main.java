package defibrilators;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.List;


public class Main{
    public static void main(String[] args) {
        try(BufferedReader in = new BufferedReader(new InputStreamReader(System.in))){
            String filePath = Utils.input(in, "File path:", "data.json");
            String data = Utils.loadFromFile(filePath);
            
            User u = Utils.extractUserData(data);
            
            List<Defibrilator> defebs = Utils.parse(data);
            
            System.out.println(Utils.getNearestDefibrilator(u, defebs));
            
        }catch (Exception e){
            e.printStackTrace();
        }
    }
}

