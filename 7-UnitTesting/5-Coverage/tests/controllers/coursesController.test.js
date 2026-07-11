const coursesController = require("../../src/controllers/coursesController");
const coursesModel = require("../../src/models/coursesModel");

jest.mock("../../src/models/coursesModel");

describe("Testing courses Controller", () => {

    describe("Testing getAll courses method", () => {
        test("Should return all courses", () => {
            const mockCourses = [{ _id: "1", name: "Course 1" }, { _id: "2", name: "Course 2" }];
            coursesModel.find.mockReturnValue(mockCourses);
            const result = coursesController.getAllCourses();
            expect(result).toBe(mockCourses);
            // Can write multiple assertions in a test
            // Best practice is the use toHaveBeenCalledTimes/ other when we mock functions
            expect(coursesModel.find).toHaveBeenCalledTimes(1);
        });
    });

    describe("Testing get a course method", () => {
        test("It should return a course of found", () => {
            const mockCourse= { _id: "1", name: "Course 1" };
    
            // Other ways to mock / mockReturnValue/ mockImplementation
            coursesModel.findById = jest.fn().mockImplementation((id) => {
                return id === 1 ? mockCourse: null;
            })

            const result = coursesController.getCourseById(1);

            expect(result).toBe(mockCourse);
            expect(coursesModel.findById).toHaveBeenCalledTimes(1);
        })

        // A test can be written using the test keyword or it keyword
        it("Should throw an error if course is not found", () => {
            const mockCourse= { _id: "1", name: "Course 1" };
    
            // Other ways to mock / mockReturnValue/ mockImplementation
            coursesModel.findById = jest.fn().mockImplementation((id) => {
                if (id === 1) return mockCourse;
                throw new Error("Course not found");
            })
            // Error scenarios should be wrapped in a function so that jest could capture it
            expect(() => coursesController.getCourseById(999)).toThrow("Course not found");
        })
    })

    describe("Test creation of a course", () => {
        it("should create and return a new course",  () => {
            const mockCourse = { name: "New Course" };
            const savedCourse = { _id: "1", ...mockCourse };
            coursesModel.create.mockReturnValue(savedCourse);

            const result =  coursesController.createCourse(mockCourse);

            expect(result).toBe(savedCourse);
            expect(coursesModel.create).toHaveBeenCalledTimes(1);

        });
    })
})



