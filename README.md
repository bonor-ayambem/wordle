
# Wordle Web Program

## Purpose

This project is a simulation of the popular Wordle game

## Project Description

This project is a simple web programming design that makes use of HTML, Javascript,
and CSS. The frontend webpage is designed in public/index.html and public/styles.css
and most of the functionality is achieved via interactions between scrips.js, app.js,
and public/index.html.

## Run Instructions

- Run `node app.js` in a terminal
- In a web browser, visit `localhost:3000`

## Test Run

![alt text] (webpage.JPG)

Fasta file called test.fasta is provided as follows:
```
    > read1
    GCATTTATTATCGGGCGACAATCCAATAGT
    > read2
    TCCTCTTTTAACTACAAAGCGTGTTTTTTG
    > read3
    TTAATCTGCCGTTTGTTATGGTTCTGAGAA
    > read4
    GCATTTATTATCGGGAAAGCGTGTTTTTTG
    > read5
    AAAAAAAAAAAAAAAAAAGCGTGTTTTTTG
    > read6
    AAAAAAAAAAAAAAAAAAGCGTGTTTTTTG
    > read7
    AAAGCGTGTTTTTTGAAAAAAAAAAAAAAA
    > read8
    AAAAAACTGTTGATACAGAAAAACTTTTCG
    > read9
    AAAAAACTGTTGATACAGAAAAACTTTTCG
    > read10
    GGGGAAAATTTTCCCCGGGGTTTTAAAACC
    > read11
    CGGGGTTTTAAAACCCCCCCGGGGGGGGGG
    > read12
    TTTTTTTTTTGGGGAAAATTTTCCCCGGGG
```

Run the following lines of code:

 `javac Sequencer.java`
 `java Sequencer`
 
```
    Enter File Name:
    test.fasta
```


The output is a file called resultsTest.fasta and it is located in the source folder.
Its contents are the following:
```
    > contig1
    GCATTTATTATCGGGAAAGCGTGTTTTTTGAAAAAAAAAAAAAAAAAAGCGTGTTTTTTG
    > contig2
    GCATTTATTATCGGGCGACAATCCAATAGT
    > contig3
    TCCTCTTTTAACTACAAAGCGTGTTTTTTG
    > contig4
    TTAATCTGCCGTTTGTTATGGTTCTGAGAA
    > contig5
    TTTTTTTTTTGGGGAAAATTTTCCCCGGGGTTTTAAAACCCCCCCGGGGGGGGGG
```