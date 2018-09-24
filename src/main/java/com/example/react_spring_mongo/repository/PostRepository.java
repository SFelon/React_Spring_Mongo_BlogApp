package com.example.react_spring_mongo.repository;

import com.example.react_spring_mongo.model.Post;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "posts", path = "posts")
public interface PostRepository extends MongoRepository <Post, String> {
}
