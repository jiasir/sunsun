/**
 * This class represents a repository for images, providing a method to retrieve an image by name from a MySQL database.
 * The database connection details are stored as constants in the class.
 */
package dev.sunsun.gw;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import com.google.gson.Gson;

/**
 * This class represents a repository for images. It provides methods for retrieving images by name from a MySQL database.
 */
public class ImageRepo {
    private static final String DB_URL = "jdbc:mysql://localhost:3306/mydatabase";
    private static final String DB_USER = "myuser";
    private static final String DB_PASSWORD = "mypassword";

    /**
     * Returns the JSON representation of the Image object with the given name.
     * If no image with the given name is found, returns an empty JSON object.
     *
     * @param name the name of the image to retrieve
     * @return the JSON representation of the Image object with the given name, or an empty JSON object if no image is found
     */
    public String getImageByName(String name) {
        Gson gson = new Gson();
        try (Connection conn = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
             PreparedStatement stmt = conn.prepareStatement("SELECT * FROM images WHERE name = ?")) {
            stmt.setString(1, name);
            ResultSet rs = stmt.executeQuery();
            if (rs.next()) {
                Image image = new Image(rs.getInt("id"), rs.getString("name"), rs.getString("url"));
                return gson.toJson(image);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return "{}";
    }

    /**
     * Represents an image with an id, name, and URL.
     */
    private static class Image {
        @SuppressWarnings("unused")
        private int id;
        @SuppressWarnings("unused")
        private String name;
        @SuppressWarnings("unused")
        private String url;

        public Image(int id, String name, String url) {
            this.id = id;
            this.name = name;
            this.url = url;
        }
    }
}




