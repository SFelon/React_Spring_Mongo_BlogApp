package com.example.react_spring_mongo.controller;

import com.example.react_spring_mongo.model.Post;
import com.example.react_spring_mongo.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class PostController {

    @Autowired
    private PostRepository postRepository;

    @GetMapping("/posts")
    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    @GetMapping("/posts/{id}")
    public ResponseEntity<Post> getPost(@PathVariable("id") String id) {
        Optional<Post> postData = postRepository.findById(id);
        if (postData.isPresent()) {
            return new ResponseEntity<>(postData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/posts")
    public Post createPost(@Valid @RequestBody Post post) {
        return postRepository.save(post);
    }

    @PutMapping("/posts/{id}")
    public ResponseEntity<Post> updatePost(@PathVariable("id") String id,
                              @RequestBody Post post) {
        Optional<Post> postData = postRepository.findById(id);
        if (postData.isPresent()) {
            Post savedPost = postData.get();
            savedPost.setPostTitle(post.getPostTitle());
            savedPost.setPostContent(post.getPostContent());
            savedPost.setLastModified(new Date());

            Post updatedPost = postRepository.save(savedPost);
            return new ResponseEntity<>(updatedPost, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/posts/{id}")
    public ResponseEntity<String> deletePost(@PathVariable("id") String id) {

        try {
            postRepository.deleteById(id);
        } catch (Exception e) {
            return new ResponseEntity<>("Fail to delete!", HttpStatus.EXPECTATION_FAILED);
        }

        return new ResponseEntity<>("Post has been deleted!", HttpStatus.OK);
    }

    @DeleteMapping("/posts/delete")
    public ResponseEntity<String> deleteAllPosts() {

        try {
            postRepository.deleteAll();
        } catch (Exception e) {
            return new ResponseEntity<>("Fail to delete!", HttpStatus.EXPECTATION_FAILED);
        }

        return new ResponseEntity<>("All Posts have been deleted!", HttpStatus.OK);
    }

}

