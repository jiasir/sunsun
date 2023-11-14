package dev.sunsun.gw;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

public class RESTfullServiceTest {

    private RESTfullService restfullService;

    @Mock
    private ImageRepo imageRepo;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
        restfullService = new RESTfullService(imageRepo);
    }

    @Test
    public void testGetImageByName() {
        String expectedJson = "{\"id\":1,\"name\":\"test\",\"url\":\"http://example.com/test.jpg\"}";
        when(imageRepo.getImageByName("test")).thenReturn(expectedJson);

        String actualJson = restfullService.getImageByName("test");

        assertEquals(expectedJson, actualJson);
    }

    @Test
    public void testGetImageByNameNotFound() {
        String expectedJson = "{}";
        when(imageRepo.getImageByName("nonexistent")).thenReturn(expectedJson);

        String actualJson = restfullService.getImageByName("nonexistent");

        assertEquals(expectedJson, actualJson);
    }
}