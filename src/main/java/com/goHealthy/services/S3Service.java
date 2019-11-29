package com.goHealthy.services;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.net.URI;
import java.net.URISyntaxException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.AmazonClientException;
import com.amazonaws.AmazonServiceException;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;

@Service
public class S3Service {
	
	@Autowired
	private AmazonS3 clienteS3;
	@Value("${s3.bucket}")
	private String bucket;
	
    
    public URI uploadPicture(MultipartFile file,String directory, String fileName, Integer id){
        try {
			String name = directory+fileName+id;
			InputStream inputStream = file.getInputStream();
			String type = file.getContentType();
			return uploadFile(inputStream,name,type);
			} catch (IOException e) {
				throw new RuntimeException("Erro de IO!");
			}

    }
	
	public URI uploadFile(MultipartFile file) {
		try {
			String name = file.getOriginalFilename();
			InputStream inputStream = file.getInputStream();
			String type = file.getContentType();
			return uploadFile(inputStream,name,type);
			} catch (IOException e) {
				throw new RuntimeException("Erro de IO!");
			}
	}

	public URI uploadFile(InputStream inputStream, String name, String type) {
		ObjectMetadata metaData = new ObjectMetadata();
		metaData.setContentType(type);
		clienteS3.putObject(bucket,name,inputStream,metaData);
		try {
			return clienteS3.getUrl(bucket,name).toURI();
		} catch (URISyntaxException e) {
			throw new RuntimeException("Erro imprevisível!");
		}
	}
}