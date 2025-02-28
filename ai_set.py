import mysql.connector

# Open image file in binary mode
with open("alabama_logo.jpg", "rb") as f:
    binary_data = f.read()

                                       # Connect to MySQL database
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="password",
    database="college_football"
)

cursor = db.cursor()

                                       # Insert logo image for Alabama team
cursor.execute("""
    INSERT INTO team_images (team_id, image_type, image_name, mime_type, image_data)
    VALUES (%s, %s, %s, %s, %s)
""", (1, 'logo', 'Alabama 2023 Logo', 'image/jpeg', binary_data))

                                       # Commit the transaction
db.commit()

cursor.close()
db.close()
˜