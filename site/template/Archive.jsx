import React from 'react';
import {Link} from 'bisheng/router';
import DocumentTitle from 'react-document-title';
import Layout from './Layout';
import Nav from './Nav';

function getTime(date) {
    return (new Date(date)).getTime();
}

export default class Archive extends React.Component {

    render() {

        const props = this.props;
        const toReactComponent = props.utils.toReactComponent;
        const posts = props.picked.posts
            .sort((a, b) => getTime(b.meta.publishDate) - getTime(a.meta.publishDate));

        let year = NaN;
        const entryList = [];
        const topList = []
        posts.forEach(({meta, description}, index) => {
            const publishYear = meta.publishDate.slice(0, 4);
            if (year !== publishYear) {
                year = publishYear;
                entryList.push(
                    <a className="bold" href={`#${publishYear}`} key={publishYear} id={publishYear}>
                        {publishYear}
                    </a>);
            }

            entryList.push(
                <div className="item" key={index}>
                    <h4 className="item-title" id={meta.title}>
                        <time>{`${meta.publishDate.slice(0, 10)} `}</time>
                        <Link to={`/${meta.filename.replace(/\.md$/i, '')}`}>{meta.title}</Link>
                    </h4>
                    {
                        !description ? null :
                            <div className="item-description">
                                { toReactComponent(description) }
                            </div>
                    }
                </div>
            );

            const fileNameArr = meta.filename.split('/')

            if (fileNameArr.length >= 2 && !/\.md$/.test(fileNameArr[1])) {
                topList.push(fileNameArr[1])
            }
        })


        return (
            <DocumentTitle title="BiSheng Theme One">
                <Layout {...props}>
                    <Nav items={topList}/>
                    <h3 className="bold">所有文档</h3>
                    <div className="">
                        {entryList}
                    </div>
                </Layout>
            </DocumentTitle>
        );
    }
}

// export default (props) => {
//
// }

// TODO
// <div class="pagination">
//   {%- if pagination.has_prev %}
//   <a class="newer" href="{{ pagination_url(pagination.prev_num) }}">Newer</a>
//   {%- endif %}

//   {%- if pagination.has_next %}
//   <a class="older" href="{{ pagination_url(pagination.next_num) }}">Older</a>
//   {%- endif %}
// </div>
