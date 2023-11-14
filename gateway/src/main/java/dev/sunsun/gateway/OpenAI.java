/**
 * This class represents a REST controller that handles requests to the OpenAI API.
 * The API key is retrieved from the system environment variable "OPENAI_API_KEY".
 * The "getOpenAiResponse" method sends a POST request to the OpenAI API with a prompt message and returns the response.
 */
package dev.sunsun.gateway;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.CrossOrigin;


@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class OpenAI {

    // gpt-4 (and gpt-4 turbo), gpt-3.5-turbo
    // private static final String OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";
        private static final String OPENAI_API_URL = "https://model.aigcbest.top/v1/chat/completions";


    /**
     * Sends a message to OpenAI API and returns the response as a String.
     *
     * @param message the message is a JSON to send to the OpenAI API
     * @return the response from the OpenAI API as a String
     */
    @PostMapping("/openai")
    public String getOpenAiResponse(@RequestBody Model message) {
        RestTemplate restTemplate = new RestTemplate();
        Model requestBody = new Model("gpt-4", message.messages());
        String authorizationHeader = "Bearer " + System.getenv("OPENAI_API_KEY");
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Authorization", authorizationHeader);
        HttpEntity<Model> request = new HttpEntity<>(requestBody, headers);
        ResponseEntity<String> response = restTemplate.postForEntity(OPENAI_API_URL, request, String.class);
        return response.getBody();
    }
}
