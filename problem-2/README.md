# Node.js Modülleri

## 1. **Temel Modüller** (Node.js içinde yerleşik, yüklemeye gerek yok)

- **`os`**: İşletim sistemi hakkında bilgi sağlar (örn. CPU, bellek vb.).
- **`fs` (Dosya Sistemi)**: Dosya sistemiyle etkileşim kurmak için kullanılan bir API sağlar (dosya okuma/yazma vb.).
- **`path`**: Dosya ve dizin yollarıyla çalışmak için yardımcı fonksiyonlar sağlar.
- **`buffer`**: İkili verilerle çalışmayı sağlar.
- **`crypto`**: Şifreleme işlevselliği sağlar, örneğin hash oluşturma ve şifreleme işlemleri.
- **`stream`**: Büyük dosyalar gibi akış verilerini işlemek için kullanılır.
- **`events`**: Olay tabanlı programlama ile çalışmanıza olanak tanır.
- **`child_process`**: Diğer sistem komutlarını veya betikleri Node.js üzerinden çalıştırmanıza olanak tanır.
- **`util`**: Dize biçimlendirme, callbackleri `promisify` etme gibi yardımcı fonksiyonlar sağlar.
- **`http`/`https`**: HTTP(S) sunucuları oluşturmak ve istek/cevap işlemek için kullanılır.
- **`cluster`**: İş yükünü birden fazla CPU çekirdeği arasında dağıtmak için alt süreçler oluşturmanıza yardımcı olur.

## 2. **Üçüncü Taraf Modüller** (npm ile yüklenmesi gerekir)

- **`axios`**: Harici API'lara HTTP istekleri göndermek için kullanılır.
- **`sequelize`**: PostgreSQL, MySQL, SQLite gibi SQL tabanlı veritabanlarıyla çalışmak için kullanılan bir ORM.
