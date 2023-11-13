/**
 * This class represents a RESTful service that handles image requests.
 * It contains a method to get an image by name.
 */
package dev.sunsun.gw;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RESTfullService {

    private final ImageRepo imageRepo;

    /**
     * Constructor for RESTful service that handles image requests.
     * @param imageRepo the image repository to use
     */
    public RESTfullService(ImageRepo imageRepo) {
        this.imageRepo = imageRepo;
    }

    /**
     * Retrieves an image by name.
     * @param name the name of the image to retrieve
     * @return the image as a string
     */
    @GetMapping("/image")
    public String getImageByName(@RequestParam(value = "name", defaultValue = "nothing") String name) {
        return imageRepo.getImageByName(name);
    }
}
