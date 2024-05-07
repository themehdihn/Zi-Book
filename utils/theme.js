export default function getTheme(scheme) {
  const dark = scheme === 'dark';
  const light = scheme === 'light';

  return {
    dark,
    light,
    colors: {
      primary: dark ? '#2b2e43' : '#fff',
      background: dark ? '#2b2e43' : '#f5f6f8',
      card: dark ? '#33364a' : '#ffffff',
      text: dark ? '#ffffff' : '#2b2e43',
      border: dark ? '#fff' : '#2b2e43',
      border_s1: dark ? '#3c4147' : '#f0f0f0',
      notification: 'rgb(255, 69, 58)',
      add_comment_bg: dark ? '#fff' : '#2b2e43',
      add_comment_txt: dark ? '#2b2e43' : '#fff',
      dark_btn: dark ? '#fff' : '#2b2e43',
      dark_btn_txt: dark ? '#2b2e43' : '#fff',
      searchbox: dark ? '#1c1e2b' : '#f5f6f8',
      shadow: dark ? '#000' : '#1c1e2b5d',
      progress_book: dark ? '#fff' : '#2b2e43',
      page_counter: dark ? '#fff' : '#2b2e43',
      page_counter_txt: dark ? '#2b2e43' : '#fff',
      next_btn: dark ? '#2edd92' : '#1c1e2b',
      prev_btn: dark ? '#abffdb' : '#cccccce8',
      next_btn_txt: dark ? '#1c1e2b' : '#fff',
      prev_btn_txt: dark ? '#1c1e2b' : '#2b2e43',
      inputfield: dark ? '#1c1e2b' : '#f5f6f8',
      skeletonPlaceholder: dark ? '#33364a' : '#E1E9EE',
      highlight_skeleton: dark ? '#F2F8FC' : '#F2F8FC',
    },
  };
}
