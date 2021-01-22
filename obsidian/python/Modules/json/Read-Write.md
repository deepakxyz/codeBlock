# Read-Write
```python
# read from file
with open('text.txt', 'r') as f:

    size_to_read = 10

    f_contents = f.read(size_to_read)
    print(f_contents, end='')

# write to file
'''
"w" to override the file
"a" to append to the file
'''
with open('text2.txt', 'w') as f:
    f.write('Test')
```