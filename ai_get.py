#Connect to MySQL database
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="password",
    database="college_football"
)

cursor = db.cursor()

# Fetch the logo image for the team
with ID 1 (Alabama Crimson Tide)
cursor.execute("""
    SELECT image_data, image_name, mime_type 
    FROM team_images 
    WHERE team_id = %s AND image_type = 'logo'
""", (1,))

        # Fetch the image data
image_data, image_name, mime_type = cursor.fetchone()

        # Write the binary image data to a file
with open(image_name, "wb") as f:
    f.write(image_data)

cursor.close()
db.close()