package com.lithan.XYZ.Cars.Project;

import java.util.Map;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
@Service
public class MessageSender {
	private static final String HOOKS_URL = "https://hooks.slack.com/services/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";
	private static final Map<String, String> USER_TO_CHANNEL_WEBHOOK = Map.of("Lithan",
			"T022NGQ6HKN/B022V3PT29F/xQu29jT1n5JrztgPHX5QmeVc");
	public void sendMessage(String userName, Message message) throws JsonProcessingException{
		String userChannelId =
				USER_TO_CHANNEL_WEBHOOK.get(userName);
		String userWebhookUrl = String.format(HOOKS_URL,
				userChannelId);
		RestTemplate restTemplate = new RestTemplate();
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		ObjectMapper objectMapper = new ObjectMapper();
		String messageJson = objectMapper.writeValueAsString(message);
		HttpEntity<String> entity = new HttpEntity<>(messageJson,
				headers);
		restTemplate.exchange(userWebhookUrl, HttpMethod.POST,
				entity, String.class);
	}
}