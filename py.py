from functools import reduce

numbers = [1,2,3,4]
sum_result = reduce(lambda acc, val: acc + val, numbers, 0)
print( numbers )


s = "dakljKLSfk1234sl5akf6"

# Extract the digits
digits = [ch for ch in s if ch.isdigit()]

# Reverse the digits
digits.reverse()

# Convert the string into a list for easy manipulation
chars = list(s)

# Replace digits in the original string with reversed digits
digit_index = 0
for i, ch in enumerate(chars):
    if ch.isdigit():
        chars[i] = digits[digit_index]
        digit_index += 1

# Join the list back into a string
result = "".join(chars)
print(result)  # "dakljKLSfk899sl7akf89"


if __name__ == "__main__":
    print("THe end")