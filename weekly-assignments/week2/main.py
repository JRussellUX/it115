rows = int(input("Enter number of rows: "))

for row in range(1, rows+1):
    print("  "*(rows-row), end="")
    print("$ "*(2*row-1))