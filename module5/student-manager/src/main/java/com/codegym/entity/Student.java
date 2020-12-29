package com.codegym.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity(name = "student")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Student {

    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    @Column(name = "id", columnDefinition = "INTEGER")
    private String id;

    @Column(name = "name", columnDefinition = "VARCHAR(255)")
    private String name;

    @Column(name = "age", columnDefinition = "INTEGER")
    private String age;

    @Column(name = "address", columnDefinition = "VARCHAR(255)")
    private String address;

    @Column(name = "mark", columnDefinition = "INTEGER")
    private String mark;

    @Column(name = "avatar", columnDefinition = "VARCHAR(255)")
    private String avatar;


}
