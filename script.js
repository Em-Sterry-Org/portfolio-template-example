split = () => {
    const words = $('h2').text().split('');
    // Build array
    // console.log(words)
    for (let i = 0; i < words.length; i++) {
      const letter = words[i];
      words[i] = '<span>' + letter + '</span>';
      // Wrap each letter in a span
    }
    const text = words.join('');
    // Join
    $('h2').html(text);
    // Update html
    return;
  };
  
  show_text = () => {
    split();
    const in_speed = 10;
    let count = 0;
    const length = $('.current_step p span').length;
    const end_time = length * in_speed + 200;
    $('h2 span').each(function() {
      $(this).delay(1300 + in_speed * count).animate({ opacity: '1' }, 200);
      count++;
      return;
    });
    return;
  };
  
  show_text();
  