import time
from pathlib import Path

def convert_data():
    while True:
        time.sleep(5)
        with open("image-service.txt", "r") as r:
            data = r.read().strip()
        if data.isdigit() == True:
                images = Path('images').resolve()
                dir = [i for i in images.iterdir()]
                num = int(data)
                if num > 10:
                    count = num % 10
                    path = str(dir[count])
                    with open("image-service.txt", "w") as r:
                       r.write(path)
                else:
                    path = str(dir[num])
                    with open("image-service.txt", "w") as r:
                        r.write(path) 

Path("image-service.txt").touch(exist_ok=True)
convert_data()
