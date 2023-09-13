FROM python:3.9
#pulls image
WORKDIR /app
# workdirectory everything we create will be in the folder app
COPY  . ./
#  . ./ means everything in the current folder
RUN pip install -r requirements.txt
# requirements.txt contains the all the libraries required
# we install all the requirements
CMD ["python","app.py"]
#CMD
#in terminal , in the directory where app.py  is present
# $ docker build -t server:initial .
# to build an image
#server:initial - name of the image
# run the command ..
#internet need to be strong

# $ docker images
#-p publish
#$docker run -p 8080:8080 server:initial3 .
#initial3 . - we changed the server intital build probably it was not wiorking
#local host:8080 - the react app has started running
#people are still downloading python packages - looks like it is very big


