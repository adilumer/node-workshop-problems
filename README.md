# Node.js Workshop: Problem Solving

Problems from Node.js workshop.

## INFO_TR

Ders içinde ilgili problem numaraları belirtilecektir. Katılımcılardan bu repo'yu forklayıp soruları kendi başlarına çözmeleri beklenecektir.
Klasör yapısı aşağıdaki gibidir:

```txt
problem-x/
├── src/
│   └── index.js
├── test/
│   └── index.test.js
├── package.json
├── jest.config.js
└── README.md
```

Çözümler `src` klasöründe kalmalıdır ve ana fonksiyon, `index.js` içinden export edilmelidir. Daha rahat çalışmak için fazladan dosya oluşturulabilir.

Testler için Jest modülü kullanılmıştır. Çözümünüzden sonra `npm run test` komutunu koşturarak testten geçip geçmediğini görebilirsiniz. 
NPM modüllerini yüklemeyi unutmayın.

## INFO_EN

Problem no. would be specified in the session. Attendees are expected to fork this repository and solve the problems on their own.
Every problem is structured as:

```txt
problem-x/
├── src/
│   └── index.js
├── test/
│   └── index.test.js
├── package.json
├── jest.config.js
└── README.md
```

The solution should be kept inside the `src` directory, being exported from `index.js`. Additional files can be created for code isolation.

Jest is used for testing. Once the solution is done, one can run tests using the command `npm run test` in the directory of the problem. Do not forget to install npm modules before running.
