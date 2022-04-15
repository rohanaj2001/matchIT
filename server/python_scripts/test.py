import base64
import sys
from traceback import print_tb
from turtle import width
from weakref import proxy
import cv2
print('hii there')
img_data=sys.argv[1]
print ('The image is stored for 10min only')
with open("./shirt_images/shirtImage.png", "wb") as fh:
  fh.write(base64.urlsafe_b64decode(img_data))

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
rn=int(rn/n)
gn=int(gn/n)
bn=int(bn/n)
print('average red {rn}'.format(rn=rn))
print('average green {gn}'.format(gn=gn))
print('average blue {bn}'.format(bn=bn))
# print(i)
# print(j)
