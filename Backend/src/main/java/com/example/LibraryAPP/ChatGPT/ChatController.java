import com.example.LibraryAPP.ChatGPT.ChatRequest;
import com.example.LibraryAPP.ChatGPT.ChatResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class ChatController {
    @Qualifier("openaiRestTemplate")
    @Autowired
    private RestTemplate restTemplate;

    @Value("${openai.model}")
    private String model;

    @Value("${openai.api.url}")
    private String apiUrl;

    @GetMapping("/chat")
    public String chat(@RequestParam String prompt) {
        ChatRequest request = new ChatRequest(model, prompt);
        request.setN(4);

        ChatResponse response = restTemplate.postForObject(
                apiUrl,
                request,
                ChatResponse.class);

        if (response == null || response.getChoices() == null || response.getChoices().isEmpty()) {
            return "No response";
        }

        return response.getChoices().get(0).getMessage().getContent();
    }
//        @GetMapping("/bookrecommendation")
//        public String BooksRecommendationFromChatGPT() {
//            String prompt="I have already read these books: "+ bookRepository.allBookString()+ ". Give me some book recommendations that I can read based on the books I've already read.";
//            ChatRequest request = new ChatRequest(model,prompt);
//            request.setN(1);
//
//            ChatResponse response = restTemplate.postForObject(
//                    apiUrl,
//                    request,
//                    ChatResponse.class);
//
//            if (response == null || response.getChoices() == null || response.getChoices().isEmpty()) {
//                return "No response";
//            }
//
//            return response.getChoices().get(0).getMessage().getContent();
//        }
}