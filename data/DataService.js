class DataService {
    constructor() {
        this.data = [
            {
                id: 1,
                title: 'The Future of AI in Web Development',
                content:
                    'Artificial Intelligence is transforming the web development landscape by automating repetitive tasks and enhancing user experience.',
                author: 'John Doe',
                date: '2025-02-06',
                tags: ['AI', 'Web Development', 'Technology'],
            },
            {
                id: 2,
                title: '10 JavaScript Tricks Every Developer Should Know',
                content:
                    'From array destructuring to async/await, these JavaScript tricks can make your coding life easier.',
                author: 'Jane Smith',
                date: '2025-02-05',
                tags: ['JavaScript', 'Coding', 'Tips'],
            },
            {
                id: 3,
                title: 'How to Optimize React Apps for Performance',
                content:
                    'Optimizing React apps involves using techniques like memoization, lazy loading, and avoiding unnecessary re-renders.',
                author: 'Michael Lee',
                date: '2025-02-04',
                tags: ['React', 'Performance', 'Optimization'],
            },
            {
                id: 4,
                title: 'Understanding CSS Grid vs Flexbox',
                content:
                    'Both CSS Grid and Flexbox are powerful layout systems, but they have distinct use cases.',
                author: 'Emily Brown',
                date: '2025-02-03',
                tags: ['CSS', 'Design', 'Frontend'],
            },
            {
                id: 5,
                title: 'Why TypeScript is the Future of JavaScript',
                content:
                    'TypeScript provides type safety, better tooling, and improved developer experience.',
                author: 'Chris Wilson',
                date: '2025-02-02',
                tags: ['TypeScript', 'JavaScript', 'Development'],
            },
        ];
    }
    async sendData() {
        setTimeout(() => {}, 1000);
        return this.data;
    }
    getDataByPost(data) {
        this.data.push(data);
    }
}

const res = new DataService();
export default res;
