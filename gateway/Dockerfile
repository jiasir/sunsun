FROM python:3.11

# Set the working directory to /app
WORKDIR /app

# Copy requirements.txt to the working directory
COPY requirements.txt .

# Install deps
RUN pip install --no-cache-dir -r requirements.txt

# Copy gateway.py to the working directory
COPY gateway.py .

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Set key
ENV OPENAI_API_KEY=$OPENAI_API_KEY

# Run gateway.py when the container launches
CMD ["python", "gateway.py"]
