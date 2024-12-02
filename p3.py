import time

seconds = int(input("Enter countdown time in seconds: "))
while seconds:
    print(seconds)
    time.sleep(1) // to pause the execution gor 1 second
    seconds -= 1
print("Time's up!")
