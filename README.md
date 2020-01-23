#### Pig Latin Translator
### A Pig Latin Translator that changes an english sentence to Pig Latin
## By Jeremy Kale Padot and Tiffany Nguyen
# A user input bar that translates user input to Pig Latin

Specs:

* Behavior: The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
    * Input 3
    * Output 3
* Behavior: The program adds "ay" to single-letter words beginning with a vowel.
    * Input i
    * Output iay
* Behavior: For words beginning with a vowel, add "way" to the end.
    * Input Apple
    * Output Appleway
* Behavior: For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay"
    * Input Fruits
    * Output uitsFray
* Behavior: For words beginning with "y", treat "y" as a consonant.
    * Input Yes
    * Output esYay
* Behavior: If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!
    * Input Quiet
    * Output ietQuay
* Behavior: The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
    * Input 3
    * Output 3

    