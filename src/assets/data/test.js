export const problemInfo = {
    title: "不同题型测试",
    test: 3,
    score: [0, 33, 33, 34, 33],
    problems: [
        {
            "content": "1+1=()",
            "choices": ["0", "1", "2", "3", "以上都不是"],
            "answer": 2,
            "type": 1
        },
        {
            "content": "1+1<()",
            "choices": ["0", "1", "2", "3", "4", "5", "6"],
            "answer": [0, 1],
            "type": 2
        },
        {
            "content": "1+1=(),1+2=()",
            "answer": "2,3",
            "type": 3
        }
    ]
}