import TestRenderer from 'react-test-renderer';


function Link(props) {
    return <a href={props.page}>{props.children}</a>;
}

const testRender = TestRender.create(
    <Link page="https://www.facebool.com">FaceBook</Link>
)
test("テストを作れるかお試しするテスト", () => {
    expect(testRender.toJson())
})
