package dev.sunsun.gw;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.HttpHeaders;
import org.springframework.http.*;


@RestController
public class OpenAiController {

    private static final String OPENAI_API_URL = "https://api.openai.com/v1/engines/davinci-codex/completions";

    @PostMapping("/openai")
    public String getOpenAiResponse(@RequestBody String message) {
        RestTemplate restTemplate = new RestTemplate();
        String requestBody = "{\"prompt\": \"" + message + "\", \"max_tokens\": 60}";
        String authorizationHeader = "Bearer " + System.getenv("OPENAI_API_KEY");
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Authorization", authorizationHeader);
        HttpEntity<String> request = new HttpEntity<>(requestBody, headers);
        ResponseEntity<String> response = restTemplate.postForEntity(OPENAI_API_URL, request, String.class);
        return response.getBody();
    }
}
