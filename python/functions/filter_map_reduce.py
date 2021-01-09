from functools import reduce

nums = [2, 3, 5, 6, 7, 8]

# Filter function
evens = list(filter(lambda a: a % 2 == 0, nums))
print(f"Even Fun: {evens})

# Map function
double = list(map(lambda n: n * 2, evens))
print(f"Map Fun: {double})

# Reduce function
''' Averages all the value in the list '''
red = reduce(lambda a, b: a + b, double)
print(f"Reduce Fun: {red})
