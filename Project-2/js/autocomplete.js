$(function () {
    var currencies = [
      { value: 'Kế toán - Kiểm toán', data: 'KT' },
      { value: 'Kiến trúc - Thiết kế nội thất', data: 'KT' },
      { value: 'Nhân viên kinh doanh', data: 'NKD' },
      { value: 'Hành chính - Văn phòng', data: 'HV' },
      { value: 'Xây dựng', data: 'XD' },
      { value: 'Marketing - PR', data: 'MKP' },
      { value: 'Tư vấn', data: 'TV' },
      { value: 'Kỹ thuật', data: 'KT' },
      { value: 'Bán hàng', data: 'BH' },
      { value: 'IT phần mềm', data: 'IT' },
      { value: 'Báo chí - Truyền hình', data: 'BT' },
      { value: 'Bảo hiểm', data: 'BH' },
      { value: 'Bảo vệ', data: 'BV' },
      { value: 'Biên - Phiên dịch', data: 'BPD' },
      { value: 'Bưu chính', data: 'BC' },
      { value: 'Chứng khoán - vàng', data: 'CKV' },
      { value: 'Cơ khí - Chế tạo', data: 'CKCT' },
      { value: 'Công nghiệp', data: 'CN' },
      { value: 'Dầu khí - Hóa chất', data: 'DKHC' },
      { value: 'Đàu tư', data: 'ĐT' },
      { value: 'Dệt may - Da giày', data: 'DMDG' },
      { value: 'Dịch vụ', data: 'DV' },
      { value: 'Điện tử viễn thông', data: 'ĐTVT' },
      { value: 'Điện - Điện tử', data: 'ĐT' },
      { value: 'Du lịch', data: 'DL' },
      { value: 'Game', data: 'GA' },
      { value: 'Giáo dục - Đào tạo', data: 'GDĐT' },
      { value: 'Hàng gia dụng', data: 'HGD' },
      { value: 'Hàng hải', data: 'HH' },
      { value: 'Hàng không', data: 'HK' },
      { value: 'Hóa học - Sinh học', data: 'HSH' },
      { value: 'Hoạch đinh - Dự án', data: 'HĐDA' },
      { value: 'In ấn - Xuất bản', data: 'IAXB' },
      { value: 'IT phần cứng - Mạng', data: 'ITM' },
      { value: 'Kinh doanh bất động sản', data: 'KDBĐS' },
      { value: 'Khách sạn - Nhà hàng', data: 'KSNH' },
      { value: 'Kiến trúc - TK nội thất', data: 'KTTK' },
      { value: 'Mỹ phẩm - Trang sức', data: 'MPTS' },
      { value: 'Ngân hàng', data: 'NH' },
      { value: 'Ngành nghề khác', data: 'NNK' },
      { value: 'Nghệ thuật - Điện ảnh', data: 'NTĐA' },
      { value: 'Nhân sự', data: 'NS' },
      { value: 'Nông - Lâm - Ngư nghiệp', data: 'NLN' },
      { value: 'Ô tô - Xe máy', data: 'ÔX' },
      { value: 'Pháp lý', data: 'PL' },
      { value: 'Quan hệ đối ngoại', data: 'QHĐN' },
      { value: 'Quản trị kinh doanh', data: 'QTKD' },
      { value: 'Thiết kế đồ họa web', data: 'TKW' },
      { value: 'Thiết kế - Mỹ thuật', data: 'TKM' },
      { value: 'Thời trang', data: 'T' },
      { value: 'Thủ công mỹ nghệ', data: 'TCMG' },
      { value: 'Thư ký trợ lý', data: 'TKTL' },
      { value: 'Thương mại điện tử', data: 'TMĐ' },
      { value: 'Tiếp thị - Quảng cáo', data: 'TQC' },
      { value: 'Tổ chức sự kiện - Quà tặng', data: 'QCSKT' },
      { value: 'Vận tải - Lái xe', data: 'VTLX' },
      { value: 'Vật tư - Thiết bị', data: 'VTB' },
      { value: 'Xuất - Nhập khẩu', data: 'XNK' },
      { value: 'Y tế - Dược', data: 'YTD' },
    ];

    // setup autocomplete function pulling from currencies[] array
    $('#autocomplete').autocomplete({
        lookup: currencies,
        onSelect: function (suggestion) {
            var thehtml = '<strong>Currency Name:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
            $('#outputcontent').html(thehtml);
        }
    });


});