ARG ARCH=
FROM ${ARCH}python:slim

# cd /app
WORKDIR /app

# Copy /app
ADD . /app

# Install packages
RUN pip install -r requirements.txt

# Use port 8888
EXPOSE 8888

# Run app.py
CMD ["python", "app.py"]