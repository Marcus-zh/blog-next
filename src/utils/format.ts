import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

export function formatDate(date: string | undefined): string {
  return date
    ? moment(date).format("YYYY-MM-DD HH:mm:ss")
    : moment().format("YYYY-MM-DD HH:mm:ss");
}

export function formatTime(dateString: string) {
  const date = moment(dateString);
  const now = moment();
  const diffDays = now.diff(date, 'days');
  const diffHours = now.diff(date, 'hours');

  if (diffDays === 0) {
    if (diffHours < 1) {
      return '不久前';
    }
    else{
      return `大约 ${diffHours} 小时前`;
    }
  } else if (diffDays <= 3) {
    return `大约 ${diffDays} 天前`;
  } else {
    return date.format('YY 年 MM 月 DD 日');
  }
};
