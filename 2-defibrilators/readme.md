 ## THE GOAL
The city of Montpellier has equipped its streets with defibrillators to help save victims of cardiac arrests. The data corresponding to the position of all defibrillators is available online.
Based on the data we provide in the tests, write a program that will allow users to find the defibrillator nearest to their location using their mobile phone.

## RULES
 * The distance `d` between two points `A` and `B` will be calculated using the following formula:
 ```
 x = (longitudeB - longitudeA) * cos((latitudeA + latitudeB) / 2)
 y = (latitudeB - latitudeA)
 d = sqr(x^2 + y^2) * 6371
 ```
 * In this formula, the latitudes and longitudes are expressed in radians.
 * The number `6371` corresponds to the radius of the Earth in km

## EXAMPLE:
### input
 ```
 {
      lon: 3.879483,
      lat: 43.608177,
      defibrillators: [
        {
          id: 1,
          name: "Maison de la Prevention Sante",
          address: "6 rue Maguelone 340000 Montpellier",
          phone: "",
          lon: 3.87952263361082,
          lat: 43.6071285339217
        },
        {
          id: 2,
          name: "Hotel de Ville",
          address: "1 place Georges Freche 34267 Montpellier",
          phone: "",
          lon: 3.89652239197876,
          lat: 43.5987299452849
        },
        {
          id: 3,
          name: "Zoo de Lunaret",
          address: "50 avenue Agropolis 34090 Mtp",
          phone: "",
          lon: 3.87388031141133,
          lat: 43.6395872778854
        }
      ]
    }
  ```
### output 
> `"Maison de la Prevention Sante"`


