class ProjectsController < ApplicationController
  before_action :add_initial_breadcrumbs

  def index
    # パンくずリストを設定
    breadcrumbs.add :projects, root_path

    @projects = Project.all
  end

  def new
    # パンくずリストを設定
    breadcrumbs.add :projects, root_path
    breadcrumbs.add :new_project, root_path

    @project = Project.new
    @project.tasks.build
  end

  def create
    @project = Project.new(project_params)

    if @project.save
      redirect_to projects_url
    else
      @project.tasks.build unless @project.tasks.present?
      render 'new', status: :unprocessable_entity
    end
  end

  def edit
    # パンくずリストを設定
    breadcrumbs.add :projects, root_path
    breadcrumbs.add :edit_project, root_path

    @project = Project.find(params[:id])
  end

  def update
    @project = Project.find(params[:id])

    if @project.update(project_params)
      redirect_to projects_url
    else
      render 'edit', status: :unprocessable_entity
    end
  end

  def destroy
  end

  def project_params
    params.require(:project).permit(
      :name,
      tasks_attributes: [
        :id,
        :name,
        :start_date,
        :end_date,
        :_destroy
      ]
    )
  end
end
