FROM python:latest

WORKDIR /src
COPY * ./
EXPOSE 8080
RUN pip install --no-cache-dir -r requirements.txt
CMD [ "python", "./server.py"]