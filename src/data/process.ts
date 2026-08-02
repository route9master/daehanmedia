export interface ProcessStep {
  num: string;
  name: string;
  desc: string;
  client: string;
  clientSub?: string;
  clientHighlight: boolean;
}

export const steps: ProcessStep[] = [
  { num: '01', name: '상담', desc: '무엇을 파는지, 누구에게 팔고 싶은지 듣습니다', client: '이야기 나누기. 준비 자료 없어도 됩니다.', clientHighlight: false },
  { num: '02', name: '설계', desc: '어느 자리에 실을지, 예산을 어떻게 나눌지 정합니다', client: '방향 확인 한 번.', clientHighlight: false },
  { num: '03', name: '제작', desc: '배너·영상·랜딩페이지 등 실제로 보이게 될 것을 만듭니다', client: '자료가 있으면 전달, 없으면 저희가 만듭니다.', clientHighlight: false },
  { num: '04', name: '집행', desc: '광고를 올리고, 노출을 확인합니다', client: '없습니다.', clientHighlight: true },
  { num: '05', name: '관리', desc: '매일 들여다보고, 반응이 없는 자리는 바꿉니다', client: '없습니다.', clientSub: '저희가 계속 봅니다.', clientHighlight: true },
];
