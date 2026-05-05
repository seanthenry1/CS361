import random
import time
from pathlib import Path

def rand_num():
    random_num = random.randint(1,20)
    return random_num

def rand_file():
    while True:
        time.sleep(1)
        with open("prng-service.txt", "r") as r:
            content = r.read()
        if content == "Run":
            open("prng-service.txt", "w").close()
            with open("prng-service.txt", "w") as r:
                r.write(str(rand_num()))
      
Path("prng-service.txt").touch(exist_ok=True)
rand_file()