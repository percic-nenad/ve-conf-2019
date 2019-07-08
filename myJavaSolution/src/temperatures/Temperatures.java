package temperatures;

/*
    Task:

     ## THE GOAL
    In this excercise you have to analyze records of temperatures in order to find the one closest to the zero.

    ## RULES
    * If two numbers are equally close to zero, postive integer has to be considered closest to zero.
    * If no temperatures are provided, display 0.

     ## EXAMPLE:
     ### input
    ```
    [1, -2, -8, 4, 5]
    ```
    ### output
    > `1`
 */

import java.lang.Math;

import java.util.Arrays;
public class Temperatures {
    public static void main(String[] args) {
        System.out.println("Result: " + analyzeTemperatures(new Integer[]{-1, -2, -8, 1, 4, 5}));
    }

    private static int analyzeTemperatures(Integer[] temeperatures){
        if(temeperatures == null || temeperatures.length == 0)
            return 0;

        return Arrays.stream(temeperatures)
                  .sorted((x, y) -> Math.abs(x) - Math.abs(y))
                  .limit(2)
                  .reduce((x, y) -> {
                	  //koncizinije
                      return (Math.abs(x) - Math.abs(y) == 0)? ((x < y)? y: x): x;
                      
                      /*
                      ili (sa stanovnistva citljivosti bolje)
                      if(Math.abs(x) - Math.abs(y) == 0)
                           return (x < y)? y: x;
                      return x;
                       */
                      
                  }).get();
    }
}
