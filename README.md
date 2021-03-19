# BÀI TEST NĂNG LỰC CHUYÊN MÔN

FCORP là Công ty hoạt động trong lĩnh vực truyền thông về tài chính và đầu tư tài chính. FCORP phát triển và chủ quản của các trang diễn đàn tài chính, trang tin tổng hợp tài chính và các hoạt động báo chí online về lĩnh vực tài chính nhằm hỗ trợ các hoạt động đầu tư tài chính của nhà đầu tư và nơi để các doanh nghiệp có cơ hội truyền thông các hoạt động của mình đến với Nhà đầu tư. Đầu tiên, FCORP rất trân trọng cám ơn bạn đã quan tâm ứng tuyển vào vị trí Chuyên viên lập trình web của chúng tôi. Theo đó, để xác nhận năng lực chuyên môn của bạn phù hợp với vị trí này, xin mời bạn thực hiện bài test như sau:

## ĐỀ BÀI

Công ty muốn phát triển một website mạng xã hội nơi chia sẻ kiến thức cho người tham gia về kiến thức tài chính. Công ty hiện có rất nhiều dữ liệu trong hệ thống hữu ích cho người dùng. Vì vậy Công ty muốn bạn phát triển chức năng tìm kiếm tài liệu dựa vào từ khóa bất kỳ có trong tài liệu đó.
Giả sử có hai tài liệu:

> docs[0]=”Bank regulation: Bank regulation is a form of government regulation which subjects banks to certain requirements”
> docs[1]=”Banking crisis: When banks suffer a sudden rush of withdrawals by depositors, this is called a bank run”

Khi người dùng tìm từ khóa “government” thì kết quả trả về là [0].
Hoặc khi với từ khóa “banks” nó sẽ trả về kết quả là [0,1]
Bạn hãy lập trình hoàn chỉnh và tối ưu cho class của chức năng tìm kiếm này.

    class Search {
    public Search(String[] docs) { // constructor 
        ...
       }
    public int[] findDocs(String keyword) { // method that returns array/list document id
       …
      }
    }

## Gợi ý:
* Có thể dùng bất kỳ ngôn ngữ lập trình nào
* Tạo một repository trên Github và tạo pull request cho class này, sau đó invite https://github.com/1mdc review kết quả

## Ghi chú:
Nếu có bất kỳ câu hỏi hoặc thắc mắc nào, có thể liên hệ trực tiếp lại với chúng tôi (Mr. Hoàng, mail: Hoangon@fcorp.vn) để được làm rõ.
Thời gian làm bài:
Trong vòng 24h kể từ nhận được đề bài, tương đương từ ngày 19/03/2021 đến ngày 20/03/2021 (thời gian có thể được gia hạn nếu có quá trình tương tác làm rõ với những vấn đề thiết yếu liên quan đến đề bài)
