# Matthew Serna
# 10/21/21


## PROMPT ##
# Write a program that takes in a string of characters
# and returns the number of distinct characters as well as the string without any duplicates.
# Numbers and special characters are included as part of the string. Please give a short
# explanation on what your approach was.

## SOLUTION ##
# My approach was to create a class object (could also be done functional) and 
# iterate over the string from user input and check 2 things:
# - Is it not a delimeter (a character we dont want to track)
# - Is it distinct
# If both checks pass, then append to global list
# print solution and unique characters
# I also added character frequency to see how many times a charcter occurs in string 

class Solution:

    def __init__(self) -> None:
        self.hash_map = {}
        self.distinct_char_lst = []
        self.distinct_chars_count = 0
        self.delimters = [" ", "\n", "\t"]  # check for spaces, new lines and/or tabs and ignore them

    def find_distinct_chars(self, str_arr: str):
        for char in str_arr:
            if char not in self.distinct_char_lst and char not in self.delimters:
                self.distinct_char_lst.append(char)

    def find_char_freq(self, str_arr):
        for char in str_arr:
            if char not in self.delimters and char in self.hash_map:
                self.hash_map[char] += 1
            else:
                self.hash_map[char] = 1

    def print_solution(self):
        print(f"{len(self.distinct_char_lst)} distinct characters")
        distinct_chars_str = "".join(self.distinct_char_lst)
        print(distinct_chars_str)

    def print_bonus(self):
        print("\n")
        print("--- Bonus ---")
        print(f"Frequency of distinct characters: {self.hash_map}")


# Main testing stub
my_obj = Solution()
# test_str = "angels baseball!"
user_input = input("Enter a string: ")
my_obj.find_distinct_chars(user_input)
my_obj.print_solution()

# Bonus info about string
my_obj.find_char_freq(user_input)
my_obj.print_bonus()