package dev.sunsun.gw;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;

public class OpenAiControllerTest {

    @Mock
    private RestTemplate restTemplate;

    public static final String OPENAI_API_URL = "https://api.openai.com/v1/engines/davinci-codex/completions";

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    public String getOpenAiResponse(String message) {
        restTemplate = new RestTemplate();
        String requestBody = "{\"prompt\": \"" + message + "\", \"max_tokens\": 60}";
        String authorizationHeader = "Bearer " + System.getenv("OPENAI_API_KEY");
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Authorization", authorizationHeader);
        HttpEntity<String> request = new HttpEntity<>(requestBody, headers);
        ResponseEntity<String> response = restTemplate.exchange(OPENAI_API_URL, HttpMethod.POST, request, String.class);
        return response.getBody();
    }

    @Test
    public void testGetOpenAiResponse() {
        // Test code goes here
    }
}
