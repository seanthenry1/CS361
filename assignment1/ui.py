
import time
import os

def init_file():
    with open("prng-service.txt", "w") as r:
        r.write("Run")

def read_prng():
    with open("prng-service.txt", "r") as r:
        data = r.read()
    return data

def write_num(): 
    with open("image-service.txt", "w") as r:
        r.write(read_prng())
    
def read_num():
    with open("image-service.txt", "r") as r:
        return r.read()

def run_ui():
    print("Enter 1 for image and 2 to exit:")
    choice = input()

    while True:
        if choice == '1':
            init_file()
            time.sleep(5)
            write_num()
            time.sleep(5)
            read_num()
            os.startfile(read_num())
           
        elif choice == '2':
            return
        else:
            print("Invalid Input")
        print()    
        print("Enter 1 for image and 2 to exit:")
        choice = input()

run_ui()
   
