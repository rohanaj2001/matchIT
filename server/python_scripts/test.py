import base64
import sys
import cv2
print('hii there')
img_data=sys.argv[1]
print ('The image is stored for 10min only')
with open("./shirt_images/shirtImage(Decoded).png", "wb") as fh:
  fh.write(base64.urlsafe_b64decode(img_data))

# img = cv2.imread('./shirt_images/shirtImage(Decoded).png', cv2.IMREAD_UNCHANGED)
# color = int(img[300, 300])