type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  }
  // 단어 삭제, 단어 업데이트 메서드
}

class Word {
  constructor(public term: string, public def: string) {}
  // 단어의 정의 추가, 단어 정의 수정, 단어 출력 메소드
}

const kimchi = new Word("kimchi", "한국의 음식");

const dict = new Dict();

dict.add(kimchi);
dict.def("kimchi");
