import base64
import sys
import pymongo
from pymongo import MongoClient
import cv2
conn_str='mongodb+srv://rohanaj:rohanaj@cluster0.81etx.mongodb.net/matchIT?retryWrites=true&w=majority'
try:
    conn = MongoClient(conn_str)
    print("Connected successfully!!!")
except:  
    print("Could not connect to MongoDB")
 

db = conn.matchIT
collection = db.shirts
img=sys.argv[1]
img_data=(img).split(",",1)
with open("./shirt_images/shirtImage.png", "wb") as fh:
  fh.write(base64.urlsafe_b64decode(img_data[1]))

path = r"./shirt_images/shirtImage.png"
img_rgb = cv2.imread(path, 1)
x,y,q=img_rgb.shape
rn,gn,bn=0,0,0
i=0
j=0
if(x<y):n=x
else:n=y
while (i<x)and(j<y):
    r,g,b = (img_rgb[i, j])
    rn,gn,bn=r+rn,g+gn,b+bn
    i+=1
    j+=1

#claculating the average of r,g,b values 
rn=int(rn/n)
gn=int(gn/n)
bn=int(bn/n)

#calculating the complement of r,g,b values
rc=255-rn
gc=255-gn
bc=255-bn

def rgb_to_hex(rgb):
    return '#%02x%02x%02x' % rgb
sHex=rgb_to_hex((rn, gn, bn))
scHex=rgb_to_hex((rc, gc, bc))

rec = {
        "shirt":img,
        "shirtColor":sHex,
        "shirtComplementaryColor":scHex,
        "used":'false',
        }
c=collection.insert_one(rec)
print(c.inserted_id)
print('hii there')
print ('The image is stored here until you click on Show Results')
print('The Shirt color is  :({rn})'.format(rn=sHex)) 
print('The Complementary color is  :({rc})'.format(rc=scHex)) 
