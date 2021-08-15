import { StartedCoursesPipe } from './started-courses.pipe';

describe('StartedCoursesPipe', () => {
  it('create an instance', () => {
    const pipe = new StartedCoursesPipe();
    expect(pipe).toBeTruthy();
  });
});
