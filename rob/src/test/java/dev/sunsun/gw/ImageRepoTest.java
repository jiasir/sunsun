package dev.sunsun.gw;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class ImageRepoTest {
    private final ImageRepo imageRepo = new ImageRepo();

    @Test
    public void testGetImageByName() {
        String expectedJson = "{\"id\":1,\"name\":\"test\",\"url\":\"http://example.com/test.jpg\"}";
        String actualJson = imageRepo.getImageByName("test");
        assertEquals(expectedJson, actualJson);
    }

    @Test
    public void testGetImageByNameNotFound() {
        String expectedJson = "{}";
        String actualJson = imageRepo.getImageByName("nonexistent");
        assertEquals(expectedJson, actualJson);
    }
}